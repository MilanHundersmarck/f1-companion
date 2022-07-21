import React, { useEffect, useState } from 'react';
import styles from './sessions.module.css'
import { monthToText, addHours, untilDate, toTwoDigits } from '../../../lib/functions';

export default function Sessions({ data }) {

    //TODO: inline styling
    //TODO: Countdown aparte component?
    //TODO: Spam ding?

    const Race = {date: data.date, time: data.time};
    const Weekend = [];
    if(data.FirstPractice) {Weekend.push({title: "Practice 1", date: new Date(`${data.FirstPractice.date}, ${data.FirstPractice.time}`), until: addHours(1,new Date(`${data.FirstPractice.date}, ${data.FirstPractice.time}`))})}
    if(data.SecondPractice) {Weekend.push({title: "Practice 2", date: new Date(`${data.SecondPractice.date}, ${data.SecondPractice.time}`), until: addHours(1,new Date(`${data.SecondPractice.date}, ${data.SecondPractice.time}`))})}
    if(data.ThirdPractice) {Weekend.push({title: "Practice 3", date: new Date(`${data.ThirdPractice.date}, ${data.ThirdPractice.time}`), until: addHours(1,new Date(`${data.ThirdPractice.date}, ${data.ThirdPractice.time}`))})}
    if(data.Qualifying) {Weekend.push({title: "Qualifying", date: new Date(`${data.Qualifying.date}, ${data.Qualifying.time}`), until: addHours(1,new Date(`${data.Qualifying.date}, ${data.Qualifying.time}`))})}
    if(data.Sprint) {Weekend.push({title: "Sprint", date: new Date(`${data.Sprint.date}, ${data.Sprint.time}`), until: addHours(0.5,new Date(`${data.Sprint.date}, ${data.Sprint.time}`))})}
    if(Race) {Weekend.push({title: "Race", date: new Date(`${Race.date}, ${Race.time}`), until: addHours(2,new Date(`${Race.date}, ${Race.time}`))})}

    //Sort by date
    Weekend.sort(function(a,b){
        return a.date - b.date;
      });

    const nextSession = Weekend.filter(item => new Date(item.date) - new Date() > 0)[0];
    const untilNextSession = untilDate(nextSession.date);
    let inProgress = false;
    
    Weekend.forEach((item) => {
        // if(new Date(item.date) < new Date() && new Date(item.until) > new Date()) {
        if(new Date(item.date) < new Date() && new Date(item.until) > new Date()) {
            inProgress = true;
        } else {
            inProgress = false;
        }
    })

    const [timeLeft, setTimeLeft] = useState(untilDate(nextSession.date))

    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(untilDate(nextSession.date)), 1000);
        return () => {
            clearInterval(interval);
        };
    },[])

    return (
        <div className={styles.container}>  
            <div>
                <div className={`${styles.title} text-center`}>{nextSession.title}</div>

                {/* <div className={`${styles.timerlabel} text-center mt-3`}>IN PROGRESS</div> */}
                {!inProgress ? <div className='d-flex flex-row justify-content-around'>
                    <div className='d-flex flex-column text-center'>
                        <div className={styles.timernumber}>{toTwoDigits(untilNextSession.days)}</div>
                        <div className={styles.timerlabel}>DAYS</div>
                    </div>
                    <div className='d-flex flex-column text-center'>
                        <div className={styles.timernumber}>{toTwoDigits(untilNextSession.hours)}</div>
                        <div className={styles.timerlabel}>HRS</div>
                    </div>
                    <div className='d-flex flex-column text-center'>
                        <div className={styles.timernumber}>{toTwoDigits(untilNextSession.minutes)}</div>
                        <div className={styles.timerlabel}>MINS</div>
                    </div>
                </div> : <div className={`${styles.timerlabel} text-center mt-3`}>IN PROGRESS</div>}
                <hr/>
            </div>
            <div className={styles.calendarblock}>
                {Weekend.filter(item => new Date(item.date) - new Date() > 0).slice(1).map((item, index) => (
                    <div className='d-flex flex-row justify-content-around' key={index}>
                        <div className='text-center'><div style={{'fontSize':'40px','fontWeight':'500'}}>{toTwoDigits(item.date.getDate())}</div><div style={{'fontSize':'20px','fontWeight':'500'}}>{monthToText(item.date.getMonth(), 'short').toUpperCase()}</div></div>
                        <div className='d-flex flex-column my-auto'>
                            <div style={{'fontSize':'32px','fontWeight':'500'}}>{item.title}</div>
                            <div style={{'fontSize':'16px','fontWeight':'500'}}>{item.date.getHours()}:{toTwoDigits(item.date.getMinutes())} - {item.until.getHours()}:{toTwoDigits(item.until.getMinutes())}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
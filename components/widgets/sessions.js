import styles from '../widgets/sessions.module.css'

export default function Sessions() {
    return (
        <div className={styles.container}>
            <div className={styles.timerblock}>
                <div className={`${styles.title} text-center`}>Practice 2</div>
                <div className='d-flex flex-row justify-content-around'>
                    <div className='d-flex flex-column text-center'>
                        <div className={styles.timernumber}>00</div>
                        <div className={styles.timerlabel}>DAYS</div>
                    </div>
                    <div className='d-flex flex-column text-center'>
                        <div className={styles.timernumber}>00</div>
                        <div className={styles.timerlabel}>HRS</div>
                    </div>
                    <div className='d-flex flex-column text-center'>
                        <div className={styles.timernumber}>00</div>
                        <div className={styles.timerlabel}>MINS</div>
                    </div>
                </div>
                
                <div className='d-flex flex-row justify-content-around'>
                    {/* Tekst moet kleiner */}
                    <div className='text-center'><div style={{'fontSize':'40px','fontWeight':'500'}}>09</div><div style={{'fontSize':'20px','fontWeight':'500'}}>JUL</div></div>
                    <div className='d-flex flex-column my-auto'>
                        <div style={{'fontSize':'32px','fontWeight':'500'}}>Practice 3</div>
                        <div style={{'fontSize':'16px','fontWeight':'500'}}>13:30 - 14:30</div>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-around'>
                    {/* Tekst moet kleiner */}
                    <div className='text-center'><div style={{'fontSize':'40px','fontWeight':'500'}}>09</div><div style={{'fontSize':'20px','fontWeight':'500'}}>JUL</div></div>
                    <div className='d-flex flex-column my-auto'>
                        <div style={{'fontSize':'32px','fontWeight':'500'}}>Practice 3</div>
                        <div style={{'fontSize':'16px','fontWeight':'500'}}>13:30 - 14:30</div>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-around'>
                    {/* Tekst moet kleiner */}
                    <div className='text-center'><div style={{'fontSize':'40px','fontWeight':'500'}}>09</div><div style={{'fontSize':'20px','fontWeight':'500'}}>JUL</div></div>
                    <div className='d-flex flex-column my-auto'>
                        <div style={{'fontSize':'32px','fontWeight':'500'}}>Practice 3</div>
                        <div style={{'fontSize':'16px','fontWeight':'500'}}>13:30 - 14:30</div>
                    </div>
                </div>
            </div>
            <div className={styles.calendarblock}>
                <div></div>
            </div>
        </div>
    )
}
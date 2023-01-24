import style from './Clock.module.scss';

interface ClockProps {
    time: number | undefined
}

function Clock ({time = 0} : ClockProps) {

    const minutes = Math.floor(time / 60);
    const secs = time % 60;

    const [minDecimal, minUnit] = String(minutes).padStart(2, "0");
    const [secDecimal, secUnit] = String(secs).padStart(2, "0");

    return (
        <>
            <span className={style.clockNumber}>
                {minDecimal}
            </span>
            <span className={style.clockNumber}>
                {minUnit}
            </span>

            <span className={style.clockDivisor}>:</span>

            <span className={style.clockNumber}>
                {secDecimal}
            </span>
            <span className={style.clockNumber}>
                {secUnit}
            </span>
        </>
    )
}

export default Clock;
import Chart from 'react-apexcharts'
import { store } from '../store/store';

function DepositBar() {

    const data = {
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: ['Últimos 4 depósitos']
            }
        },
        series: [{
            name: 'series-1',
            data: store.getState().deposits
        }]
    }

    return (
        <>
            <Chart className='depositChart' options={data.options} series={data.series} type="bar" width={1000} height={320} />
        </>
    )
}

export default DepositBar;

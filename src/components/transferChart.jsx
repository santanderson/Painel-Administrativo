import Chart from 'react-apexcharts'
import { store } from '../store/store';

function TransferBar() {

    const data = {
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: ['Últimas 4 transferências']
            }
        },
        series: [{
            name: 'transferências',
            data: store.getState().contas
        }]
    }

    return (
        <>
            <Chart className='transferChart' options={data.options} series={data.series} type="bar" width={1000} height={320} />
        </>
    )
}

export default TransferBar;

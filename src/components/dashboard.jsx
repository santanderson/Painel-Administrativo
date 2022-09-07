import DepositBar from "./depositChart"
import TransferBar from "./transferChart"
import { store } from "../store/store"
import { transfer, deposit } from '../store/reducer'
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const ipt = useRef();
  const ipt2 = useRef();
  let navigate = useNavigate();

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (day <= 9) {
    day = `0${day}`
  }
  if (month <= 9) {
    month = `0${month}`
  }

  const add = () => {
    const iptV = Number(ipt.current.value);
    const ipt2V = Number(ipt2.current.value);
    const saida = ipt2V + store.getState().saidas;
    store.dispatch(transfer(saida, ipt2V, 3000 - saida));

    const lucro = iptV + store.getState().entradas;
    const saldo = store.getState().valorInicial + lucro - saida;
    store.dispatch(deposit(lucro, iptV, saldo));
    navigate("preload", { replace: true });
  }

  const toggleChart = (e) => {
    const tChart = document.querySelector('.transferChart');
    const dChart = document.querySelector('.depositChart');
    const b1 = document.querySelector('.chart1');
    const b2 = document.querySelector('.chart2');

    if (e.target.className === 'chart1') {

      b1.style.backgroundColor = 'white';
      b1.style.color = 'purple';

      b2.style.backgroundColor = 'purple';
      b2.style.color = 'white';
      dChart.style.display = 'block'
      tChart.style.display = 'none'
    }
    else if (e.target.className === 'chart2') {

      b1.style.backgroundColor = 'purple';
      b1.style.color = 'white';

      b2.style.backgroundColor = 'white';
      b2.style.color = 'purple';
      dChart.style.display = 'none'
      tChart.style.display = 'block'
    }
  }

  return (
    <div className="dashboard">

      <section className="painelAnalitico">
        <h1>Indicadores</h1>

        <div className="boxes">
          <div className="saldo">
            <h2>Saldo Inicial</h2>
            <span>R$ {store.getState().valorInicial}</span>
          </div>

          <div className="entradas">
            <h2>Entradas</h2>
            <span>R$ {store.getState().entradas}</span>
          </div>

          <div className="saidas">
            <h2>Saídas</h2>
            <span>R$ {store.getState().saidas}</span>
          </div>

          <div className="saldoFinal">
            <h2>Saldo Final</h2>
            <span>R$ {store.getState().saldoFinal}</span>
          </div>
        </div>
        <form>
          <input ref={ipt} type='number' placeholder="saldo inicial" />
          <button onClick={add}>Adicionar</button>
        </form>
      </section>

      <section className="painelAnalitico">
        <h1>Contas a pagar</h1>

        <div className="boxes dividas">
          <div className="prazo">
            <h2>Prazo de Pagamento</h2>
            <span>{`${day}-${month}-${year}`}</span>
          </div>

          <div className="liquidez">
            <h2>Liquidez</h2>
            <span>R$ {store.getState().saidas}</span>
          </div>

          <div className="indadimplência">
            <h2>Taxa</h2>
            <span>14,57%</span>
          </div>

          <div className="valorPendente">
            <h2>Valor Pendente</h2>
            <span>R$ {store.getState().pendente}</span>
          </div>
        </div>
        <form>
          <input ref={ipt2} type='number' placeholder="pagar contas" />
          <button onClick={add}>Adicionar</button>
        </form>
      </section>

      <section className="graficos">
        <h1>Gráfico</h1>
        <div>
          <div className="toggle">
            <button onClick={toggleChart} className='chart1'>Depósitos</button>
            <button onClick={toggleChart} className='chart2'>Transferências</button>
          </div>
          <DepositBar />
          <TransferBar />
        </div>
      </section>

    </div>
  )
}

export default Dashboard

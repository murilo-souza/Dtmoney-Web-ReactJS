import { Container } from "./styles";
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import total from '../../assets/Total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){
    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        else{
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    })

    return (
       <Container>
           <div>
               <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="Entradas"/>
               </header>
               <strong>
                   {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.deposits)}
                </strong>
           </div>
           <div>
               <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="Saída"/>
               </header>
               <strong>- {
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.withdraw)}
                </strong>
           </div>
           <div className="highlight-background">
               <header>
                <p>Total</p>
                <img src={total} alt="Total"/>
               </header>
               <strong>
               {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(summary.total)}
               </strong>
           </div>
       </Container>
    );
}
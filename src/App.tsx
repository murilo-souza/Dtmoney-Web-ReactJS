import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";


Modal.setAppElement('#root')

export function App() {
  const [isNewTransationModalOpen, setIsNewTransationModal] = useState(false)

  function handleOpenNewTransationModal() {
      setIsNewTransationModal(true);
  }

  function handleCloseNewTransationModal() {
      setIsNewTransationModal(false);
  }
  
  return (
    <TransactionsProvider>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransationModal}
      />
      <NewTransactionModal
        isOpen={isNewTransationModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />
      <Dashboard/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}


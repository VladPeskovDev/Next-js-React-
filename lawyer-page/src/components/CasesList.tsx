'use client';

import { useState } from "react";
import Modal from "./ModalCases";
import styles from "./CasesList.module.css";
import casesData from "../data/casesData"; 

export default function CasesList(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const openModal = (fullDescription: string) => {
    setSelectedCase(fullDescription);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
  };

  return (
    <div className={styles.casesContainer}>
      {[0, 1, 2].map((rowIndex) => (
        <div key={rowIndex} className={styles.caseRow}>
          {casesData.slice(rowIndex * 5, rowIndex * 5 + 5).map((caseData) => (
            <div
              key={caseData.id}
              className={styles.caseCard}
              onClick={() => openModal(caseData.fullDescription)}
            >
              <div className={styles.caseImageContainer}>
                <img src={caseData.image} alt="Описание кейса" className={styles.caseImageSmall} />
              </div>
              <div className={styles.caseDescription}>
                <p>{caseData.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
      {/* Модальное окно для полного описания кейса */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>{selectedCase}</p>
      </Modal>
    </div>
  );
}

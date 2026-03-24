document.addEventListener('DOMContentLoaded', () => {
    const assocBtn = document.getElementById('assoc-btn');
    const memoBtn = document.getElementById('memories-btn');
    const lisBtn = document.getElementById('lis-moi-btn');
    const innBtn = document.getElementById('inner-btn');
    const inn2Btn = document.getElementById('inner2-btn'); 

    const assocContent = document.getElementById('assoc-content');
    const memoContent = document.getElementById('memories-content');
    const lisContent = document.getElementById('lis-moi-content');
    const innContent = document.getElementById('inner-content');

    const modal = document.getElementById('image-modal');
    const closeModal = document.querySelector('.close-modal');

    function toggleSection(targetContent, otherContent) {
        for (let section of otherContent) {
            section.classList.remove('active');
        }
        targetContent.classList.toggle('active');
    }

    assocBtn.addEventListener('click', () => toggleSection(assocContent, [memoContent, lisContent, innContent]));
    memoBtn.addEventListener('click', () => toggleSection(memoContent, [assocContent, lisContent, innContent]));
    lisBtn.addEventListener('click', () => toggleSection(lisContent, [assocContent, memoContent, innContent]));
    innBtn.addEventListener('click', () => toggleSection(innContent, [assocContent, memoContent, lisContent]));

    // Логика модального окна
    if (inn2Btn) {
        inn2Btn.addEventListener('click', () => {
            modal.style.display = "flex";
        });
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
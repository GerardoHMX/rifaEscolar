document.addEventListener('DOMContentLoaded', function() {
    
    const openDialogButton = document.getElementById('openDialog');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalDialog = document.getElementById('modalDialog');
    const cancelButton = document.getElementById('cancelButton');
    const okButton = document.getElementById('okButton');

    function openDialog() {
        modalOverlay.classList.add('active');
        modalDialog.setAttribute('aria-hidden', 'false');
        okButton.focus();
        document.body.style.overflow = 'hidden';
    }

    function closeDialog() {
        modalOverlay.classList.remove('active');
        modalDialog.setAttribute('aria-hidden', 'true');
        openDialogButton.focus();
        document.body.style.overflow = '';
    }

    function handleEscapeKey(event) {
        if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeDialog();
        }
    }

    openDialogButton.addEventListener('click', openDialog);
    cancelButton.addEventListener('click', closeDialog);
    okButton.addEventListener('click', () => {
        // Perform the primary action here
        console.log('Primary action confirmed');
        closeDialog();
    });

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeDialog();
        }
    });

    document.addEventListener('keydown', handleEscapeKey);

    // Trap focus within the dialog when it's open
    modalDialog.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
            const focusableElements = modalDialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        }
    });
    
});
import { MouseEvent } from "react"

type Props = {
    closeTutorial: ()=> void
}

export const ModalTutorial = (props:Props) => {
    const closeModal = (event: MouseEvent) => {
        const modal = event.target as HTMLDivElement

        if (modal.dataset.modal === "true") {
            props.closeTutorial()
        }
    }
    return (
        <div className='tutorialModal' data-modal="true" onClick={closeModal}>
            <div className='tutorialContent'>
                <header>
                    <h2>Hello!!</h2>
                    <img src="/close_black_24dp.svg" alt="Close" onClick={props.closeTutorial}/>
                </header>
                <p>Welcome to Color Generator site, this is a simple tutorial to show to you how to use this site.</p>
                <p><strong>1º</strong> - Select a different type of color generation. <br /><strong>Simple</strong> {"(non-random colors)"}, <br /><strong>HEX</strong> {"(random hexadecimal colors)"} or <br /><strong>RGB</strong> {"(random RGB colors)"}. </p>
                <p><strong>2º</strong> - Click on <strong>CHANGE</strong> button to generate another color.</p>
                <p>If you want to copy the color to the clipboard just click the button <strong>COPY</strong> or click on the color text.</p>
                <p>Simple Right?</p>
            </div>
        </div>
    )
}
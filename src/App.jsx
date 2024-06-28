import './App.css'
import Modal from "./Modal/Modal";
import {useState} from "react";

export default function App() {
    const [modalActive, setModalActive] = useState(true)
    return (
        <>
            <button className='open-btn' onClick={() => setModalActive(true)}>Открыть модальное окно</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore dolores enim, minima pariatur sit
                vel. Ab accusamus alias amet aperiam atque autem commodi consequatur culpa dignissimos facere facilis
                fugit laboriosam magni nisi non pariatur, perspiciatis porro quasi qui quo suscipit veniam voluptate!
                Animi aperiam ea hic nisi porro quod similique tempore. Blanditiis delectus hic, ipsa iste libero maxime
                omnis quos sint? Asperiores aspernatur assumenda consectetur cumque, deserunt dolores dolorum ea eveniet
                id incidunt laboriosam libero magnam, minima molestiae nobis nostrum odit quasi quos sequi vero?
                Consectetur culpa ea eaque nemo non numquam odio, quas quasi sequi similique, suscipit velit?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore dolores enim, minima pariatur sit
                vel. Ab accusamus alias amet aperiam atque autem commodi consequatur culpa dignissimos facere facilis
                fugit laboriosam magni nisi non pariatur, perspiciatis porro quasi qui quo suscipit veniam voluptate!
                Animi aperiam ea hic nisi porro quod similique tempore. Blanditiis delectus hic, ipsa iste libero maxime
                omnis quos sint? Asperiores aspernatur assumenda consectetur cumque, deserunt dolores dolorum ea eveniet
                id incidunt laboriosam libero magnam, minima molestiae nobis nostrum odit quasi quos sequi vero?
                Consectetur culpa ea eaque nemo non numquam odio, quas quasi sequi similique, suscipit velit?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore dolores enim, minima pariatur sit
                vel. Ab accusamus alias amet aperiam atque autem commodi consequatur culpa dignissimos facere facilis
                fugit laboriosam magni nisi non pariatur, perspiciatis porro quasi qui quo suscipit veniam voluptate!
                Animi aperiam ea hic nisi porro quod similique tempore. Blanditiis delectus hic, ipsa iste libero maxime
                omnis quos sint? Asperiores aspernatur assumenda consectetur cumque, deserunt dolores dolorum ea eveniet
                id incidunt laboriosam libero magnam, minima molestiae nobis nostrum odit quasi quos sequi vero?
                Consectetur culpa ea eaque nemo non numquam odio, quas quasi sequi similique, suscipit velit?</p>
            <Modal active={modalActive} setActive={setModalActive}>
                <iframe src="https://i.pinimg.com/originals/31/6c/b8/316cb8f55ac06197b2050d66437ff40d.gif" width="500px" height="278px"></iframe>
            </Modal>
        </>
    )
}
import { Component } from 'react'
import {PageError} from "../../pages/PageError";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        // Обновите состояние, чтобы при следующем рендеринге отображался резервный пользовательский интерфейс.
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // Вы также можете зарегистрировать ошибку в службе отчетов об ошибках.
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            // Вывод запасного пользовательского интерфейса
            return <PageError />
        }

        return this.props.children
    }
}
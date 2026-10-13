import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ErrorBoundary } from './ErrorBoundary/ui/ErrorBoundary'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ErrorBoundary>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</React.StrictMode>
)

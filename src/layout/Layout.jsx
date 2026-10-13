export const Layout = ({ children }) => {
	const role = sessionStorage.getItem('role')

	const adminLayout = (
		<div>
			<main>{children}</main>
		</div>
	)

	const otherLayout = (
		<div>
			<main>{children}</main>
		</div>
	)

	return role === 'admin' ? adminLayout : otherLayout
}

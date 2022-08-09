function signIn() {
	const secret = {
		email: 'admin@test.com',
		password: 'pass123',
	};

	const admin__email = document.getElementById('admin__email').value.trim();
	const admin__password = document
		.getElementById('admin__password')
		.value.trim();

	if (admin__email === secret.email && admin__password === secret.password) {
		window.location.replace('/admin.html');
	} else {
		alert('wrong email or password, please try again!');
		location.reload();
	}

	return false;
}

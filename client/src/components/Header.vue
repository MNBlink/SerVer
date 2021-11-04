<template>
	<div>
		<div class="nv-navbar">
			<ul class="nav">
				<li><router-link :to="{ name: 'blogs' }">หน้าแรก</router-link></li>
				<li><router-link :to="{ name: 'user' }">ผู้จัดทำ</router-link></li>
				<!--<li><router-link :to="{ name: 'login' }">Login</router-link></li>-->
				<input type="search" placeholder="Search...">
                <button>Search</button>
			</ul>
			<div class="clearfix" />
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.nv-navbar {
	background-color: rgb(55, 170, 190);
	width: 100%;
	padding: 10px 0px 10px 0px;
}
.nv-navbar .nav {
	list-style: none;
	margin: 0;
	padding: 0;
	float: left;
}
.nv-navbar .nav li {
	float: left;
}
.nv-navbar .nav li a {
	padding: 10px;
	text-decoration: none;
	color: rgb(255, 255, 255);
	font-weight: bold;
}
.nv-navbar .nav li a:hover {
	padding: 10px;
	text-decoration: none;
	color: rgb(34, 32, 29);
}
.nv-navbar .nav li a.router-link-active {
	background-color: rgb(65, 64, 59);
	color: rgb(105, 212, 195);
}
.clearfix {
	clear: left;
}
</style>

# React Introduction
React is a JavaScript library for building user interfaces. It is the view layer for web application.

At the heart of all React appliactions are components. A component is a self contained module that renders some output. For example, take a form. A form might consist of many interface elements, like input fileds, labels, or buttons. Each element inside the form can be written as a React component. We'd then write higher-level component, the form component itself.

## How does it works?




### Simple sandalone example of React Web Application

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>Hello React!</title>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.min.js"></script> 
	<script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
</head>
<body>
	<div id="example"></div>

	<script type="text/babel">
		ReactDOM.render(
		<h1>Hello, world!</h1>,
		document.getElementById('example')
		);
	</script>
	
</body>
</html>

```

### Example 2 how to create React Components
```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>Hello React!</title>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.min.js"></script> 
	<script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
</head>
<body>
	<div id="example"></div>
	<div id="app"></div>
		/**
			Example 1 : Rendering by using DOM method 
		**/
		var conent = <h1>Hello, world!</h1>,
		element = document.getElementById('example');

		ReactDOM.render(
			conent, 
			element
		);

		/**
			Example 2 : Rendering by extending React Component Classes
		**/
		class Abc extends React.Component {
			render() {
				return <h1>Hello from our app</h1>
			}
		}
		var mount =  document.getElementById('app');
		ReactDOM.render(
			<Abc />, 
			mount
		);
	
</body>
</html>
```

### Example 3 how to link React Components

````
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>Hello React!</title>	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.min.js"></script> 
	<script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
</head>
<body>
	<div id="app"></div>
	<script type="text/babel">
		
		/**
			Example 4 : Linking / Inserting child components to main
		**/
		class MainLayout extends React.Component {
			render() {
				return (
					<div className="layout">
						<Header />
						<Content />
						<Footer />
					</div>
				);
			}
		}

		class Header extends React.Component {
			render() {
				return <header> <h1>Header Section</h1></header>
			}
		}
		class Content extends React.Component {
			render() {
				return <section><p>Content Section</p></section>
			}
		}
		class Footer extends React.Component {
			render() {
				return <footer><ul><li>Footer Section</li></ul></footer>
			}
		}

		var mount =  document.getElementById('app');
		ReactDOM.render(
			<MainLayout />, 
			mount
		);

	</script>
</body>
</html>
```


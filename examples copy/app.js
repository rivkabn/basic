function Hello() {
    return <div > hello to babel < /div>}

    const rootNode = document.getElementById('root');
    const root = ReactDOM.createRoot(rootNode);
    root.render(React.createElement(Hello));
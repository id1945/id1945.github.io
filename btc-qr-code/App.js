const Component = React.Component;
// const axios = Axios;

class App extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="w400 text-center"> Bitcoin Wallet Valid</th>
                        <th className="w400 text-center" colSpan="2">Wallet Bitcoin is Blockchain</th>
                        <th className="w300">#</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td rowSpan="3">
                            <div className="text-center">
                                <img src="https://blockchain.info/qr?data=15LRgsnWMGEHqHGvfRrndz7qKjV54JWmvd&size=200" width="200px"/><br/>
                                <div className="m-3">
                                    <button className="btn alert-success mr-2">Create QR Code</button>
                                    <button className="btn alert-danger">Download PNG</button>
                                </div>
                            </div>
                        </td>
                        <td colSpan="2">
                            Address: 
                            <input type="text" className="form-control"/>
                            <br/>
                            <label>Amount: 
                                <input type="number" className="form-control"/>
                            </label>
                        </td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>
                            <div className="text-center"> 
                                <button className="btn alert-primary">Bitcoin Templates</button>
                            </div> 
                        </td>
                    </tr>
                    <tr>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
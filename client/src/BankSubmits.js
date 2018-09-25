import React, {Component} from 'react';
import DisplayAccounts from './DisplayAccounts';

class BankSubmits extends Component{
    constructor(props) {
        super(props);
        this.state = {
            accounts: [
                {name: 'Maddi',
                password: 'lotus',
                balance: 500}
            ],
            name: '',
            password:'',
            balance: Number
        }
    }

    nameChange = (event) => {
        this.setState ({name: event.target.value})
    };

    balanceChange = (event) => {
        this.setState ({balance: event.target.value})
    };

    passwordChange = (event) => {
        this.setState ({password: event.target.value})
    };

    submitBank = (event) => {
            let newBanker = {name: this.state.name, balance: this.state.balance, password: this.state.password};
            this.state.accounts.push(newBanker);
            this.setState({accounts: this.state.accounts,
            name: '',
            password: '',
            balance: Number});
            // document.getElementById('message').innerHTML = this.state.accounts
            event.preventDefault()
    };


    render(){
     return (
         <div>
             <form onSubmit={this.submitBank}>
                 <label>Name:</label>
                 <input value={this.state.name} type='text' placeholder='Enter Name' onChange={this.nameChange}/>
                 <label>Password:</label>
                 <input value={this.state.password} type='password' placeholder='Enter Password' onChange={this.passwordChange}/>
                 <label>Balance:</label>
                 <input value={this.state.balance} type='text' placeholder='Enter Balance' onChange={this.balanceChange}/>
                 <button type='submit'>SUBMIT</button>
             </form>
             <h3>The List of Accounts are below:</h3>
             <DisplayAccounts accounts={this.state.accounts}/>
             {/*<p id='message'></p>*/}
         </div>
     )

    }
}

export default BankSubmits;
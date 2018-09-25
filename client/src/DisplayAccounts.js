import React, {Component} from 'react';

class DisplayAccounts extends Component{

    render() {

        let accountArray = this.props.accounts.map(
            eachaccount => {
                return (
                    <div>
                        <p> {eachaccount.name}'s account is {eachaccount.balance}. </p>
                    </div>
                );
            }
        );

        return (
            <div>
                <p>{accountArray}</p>
            </div>
        )
    }
}

export default DisplayAccounts;
import React, { Component } from "react";

export default function (ComposedComponent) {
    class NetworkDisconnection extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isDisconnected: false
            }
        }

        componentDidMount() {
            this.handleChangeConnection();
            window.addEventListener('online', this.handleChangeConnection);
            window.addEventListener('offline', this.handleChangeConnection);
        }

        componentWillUnmount() {
            window.addEventListener('online', this.handleChangeConnection);
            window.addEventListener('offline', this.handleChangeConnection);
        }

        handleChangeConnection = () => {
            const condition = navigator.onLine ? 'online' : 'offline';

            if (condition === 'online') {
                const webPing = setInterval(() => {
                    fetch('//google.com', {
                        mode: 'no-cors'
                    })
                        .then(() => {
                            return this.setState({ isDisconnected: false }, () => {
                                clearInterval(webPing);
                            });
                        })
                        .catch(() => {
                            return this.setState({ isDisconnected: true })
                        })
                }, 1000);
                return;
            }
            return this.setState({ isDisconnected: true });
        }

        render() {
            const { isDisconnected } = this.state;
            if(isDisconnected) {
                console.log('Internet not available......');
            }
            return (
                <div>
                    {isDisconnected && (<div>
                        <p>Internet Disconnected</p>
                    </div>
                    )}
                    <ComposedComponent {...this.props} />
                </div>
            )
        }
    }
    return NetworkDisconnection;
}
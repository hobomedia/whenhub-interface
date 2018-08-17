import * as React from 'react';
import { connect } from 'react-redux';

const screenPickerStyles = require('./ScreenPicker.scss');

export class ScreenPicker extends React.Component<any, {selectColor: any, selectScreen: any}>{
    constructor(props:any) {
        super(props)

        this.state = {
            selectColor: "none",
            selectScreen: this.props.screens[0]
        }
    }

    selectScreen(index: any) {
        console.log("click", index)
        this.setState({selectColor: "solid 1px green", selectScreen: this.props.screens[index]})
    }

    handleClick() {
        this.props.handler()
        this.props.getScreen(this.state.selectScreen)
    }

    render() {
        console.log(this.props.screens)

        return (
            <div className={screenPickerStyles.pickerBackground}>
                <div>
                    Select a screen to share:
            </div>
                {this.props.screens.map((screen: any, index: any) => {
                    return (
                        <div key={index} style={{border: this.state.selectColor}} onClick={(event: React.MouseEvent<HTMLElement>) => {
                            this.selectScreen(index)
                           }}>
                            <video style={{ width: "300px" }} src={URL.createObjectURL(screen)}></video>
                        </div>
                    )
                })}
                <button className={screenPickerStyles.pick + ` btn`} style={{ borderRadius: "20px" }} type="button" onClick={this.handleClick.bind(this)}>
                    Select Screen
                </button>

            </div>
        );
    }
}

const mapStateToProps = function (props: any, state: any) {
    return {
        profile: props.login.profile,
        token: props.login.token,
        bearer: props.login.bearer,
        history: props.getHistory.history
    }

}
export default connect(mapStateToProps)(ScreenPicker);

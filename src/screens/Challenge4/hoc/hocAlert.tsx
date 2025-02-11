import React from "react";
import { Alert } from "../../../store/Challenge4/alerts/reducer";
import { removeAlerts } from "../../../store/Challenge4/alerts/action";
import { removeSpecificAlert } from "../../../store/Challenge4/alerts/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const showAlert = (WrappedComponent: any) => {
  interface HocAlertProps {
    alerts?: Alert[];
    removeAlerts?: () => void;
    removeSpecificAlert?: (id: number) => void;
  }

  interface HocAlertState {}

  class HocAlert extends React.Component<HocAlertProps, HocAlertState> {
    constructor(props: HocAlertProps) {
      super(props);
      this.state = {};
    }

    // componentDidMount() {
    //   const { removeAlerts } = this.props;
    //   removeAlerts && removeAlerts();
    // }

    render() {
      const { removeSpecificAlert } = this.props;
      const { alerts } = this.props;
      return (
        <div>
          {alerts &&
            alerts.map(alert => (
              <div
                onClick={(): void => {
                  removeSpecificAlert && removeSpecificAlert(alert.id);
                }}
                role="alert"
                key={alert.id}
                className={`alert alert-${alert.type}`}
              >
                {alert.text}
              </div>
            ))}
          <WrappedComponent {...this.props}></WrappedComponent>
        </div>
      );
    }
  }
  const mapStateToProps = (state?: any): { alerts: Alert[] } => ({
    alerts: state.alertsReducer.alerts
  });

  const mapDispatchToProps = (dispatch: any): any =>
    bindActionCreators({ removeAlerts, removeSpecificAlert }, dispatch);

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HocAlert);
};

export default showAlert;

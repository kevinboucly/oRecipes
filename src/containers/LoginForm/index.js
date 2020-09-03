import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

const mapStateToProps = (state) => ({
  email: state.user.email,
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

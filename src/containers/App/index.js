import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchRecipes } from 'src/actions/recipes';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
  error: state.recipes.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => {
    console.log('je veux les recettes');
    dispatch(fetchRecipes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

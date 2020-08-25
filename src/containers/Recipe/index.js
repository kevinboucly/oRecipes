import { connect } from 'react-redux';

import Recipe from 'src/components/Recipe';
import { getRecipeBySlug } from 'src/selectors/recipes';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  recipe: getRecipeBySlug(state, ownProps.match.params.slug),
});

const mapDispatchToProps = {};

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipe);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

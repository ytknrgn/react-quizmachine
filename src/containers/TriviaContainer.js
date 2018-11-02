import { connect } from 'react-redux';
import Trivia from '../components/Trivia';

const mapStateToProps = state => ({
  score: state.score,
  difficulty: state.difficulty,
  lives: state.lives,
  trivia: state.trivia,
});

export default connect(
  mapStateToProps,
  null,
)(Trivia);
import MiscCont from "./MiscCont"
import Filter from './Filter'

const Criteria = (props) => {
    return (
      <div id="search-comp">
        <MiscCont img={props.img} selectedCategory={props.selectedCategory} />
        <Filter filterBoxesCategory={props.filterBoxesCategory}/>
      </div>
    );
}

export default Criteria
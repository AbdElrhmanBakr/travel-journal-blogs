import ContentSection from './ContentSection'
import data from './data'

function MainContent() {
  const cardDataArray = data.map((dataObj) => {
    return(
      <ContentSection 
      key={dataObj.id}
      {...dataObj}
      />
    )
  })
  return (
    <main className="main">
      <hr/>
      {cardDataArray}
    </main>
  );
}

export default MainContent;
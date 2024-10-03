import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "../components/Tabs.jsx"
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); //반드시 컴포넌트 함수 안에서 최상위에 호출되어야하며 절대 중복 되서는 안된다.

  // let tabContent = 'Please click a button';
  function handleSelect(selectedButton) {
    //selecteButton => components, jsx props atate
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        // ButtonsContainer="menu"
        buttons={
          <>
            <menu>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </menu>

            {/* selectedTopic의 값이 없다면 p태그 반영, 값이 있다면 div 전체 반영 */}
            {/* {!selectedTopic ? <p>Please select a topic</p> : (
                <div id="tab-content">
                  <h3>{ EXAMPLES[selectedTopic].title }</h3>
                  <p>{ EXAMPLES[selectedTopic].description }</p>                방법 1 삼항 연산자 사용
                  <pre>
                    <code>
                      { EXAMPLES[selectedTopic].code }
                    </code>
                  </pre>
                </div>
              )}  */}

            {/* {!selectedTopic && <p>Please select a topic</p>}     방법2 AND연산자 사용 A조건 참일 때 B조건 실행시킴
              {selectedTopic && (
                <div id="tab-content">
                <h3>{ EXAMPLES[selectedTopic].title }</h3>
                <p>{ EXAMPLES[selectedTopic].description }</p>
                <pre>
                  <code>
                    { EXAMPLES[selectedTopic].code }
                  </code>
                </pre>
              </div>
              )}
   */}

            {/* 방법3 tabcontent 변수에 jsx코드를 넣고 if문을 사용한다 */}
          </>
        }
        >
      
        {tabContent}
      </Tabs>
    </Section>
  );
}

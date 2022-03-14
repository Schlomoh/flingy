import { useEffect } from "react";
import {
  useAiDataSelector,
  useOutputSelector,
} from "../stateManagement/slicesNselectors/analysisSelectors";
import { setOutput } from "../stateManagement/slicesNselectors/analysisSlice";
import store from "../stateManagement/store";

function useCreateOutput() {
  async function loadJsons(): Promise<{ [key: string]: string[] }[]> {
    const { default: texts }: importedJson = await import(
      "../../content/text/allLines.json"
    );
    const { default: categorization }: importedJson = await import(
      "../../content/text/categorization.json"
    );
    return [texts, categorization];
  }

  function createSelector(arrayLength: number) {
    return Math.floor(Math.random() * arrayLength);
  }

  async function getTexts(aiData: TaiResult): Promise<void> {
    const [texts, categorization] = await loadJsons();

    let mappedCategories: string[] = [];
    // goes thru objets detcted by coco
    aiData.coco.forEach((object: TcocoResult[0]) => {
      // then goes thru class categorization to map the 90 coco classes
      // to my 10 pick up categories
      return Object.keys(categorization).forEach((category: string) => {
        if (categorization[category].includes(object.class))
          mappedCategories.push(category);
      });
    });

    // get 'amount' texts depending on the chosen categories
    function createMessages(): any[] {
      let amount = Math.floor(Math.random() * 2 + 2); // between 2 and 3
      let chosenTexts: any[] = [];
      let i = 0;
      while (i < amount) {
        const categorySelector = createSelector(mappedCategories.length);
        const textSelector = mappedCategories[categorySelector];
        const textCategory = texts[textSelector];
        const text = textCategory[createSelector(textCategory.length)];
        const newTextObj = { category: textSelector, text: text };
        if (!chosenTexts.includes(newTextObj)) {
          chosenTexts.push(newTextObj);
          i++;
        }
      }
      return chosenTexts;
    }

    function capitalize(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function createOutput(): Toutput[0] {
      const chosenTexts = createMessages();
      const tags = aiData.coco.map((e: TaiResult["coco"][0]) =>
        capitalize(e.class)
      );
      const messages = chosenTexts.map((message) => ({
        text: message.text,
        probability: 40 * Math.random() + 60 - 4,
        reason: capitalize(message.category),
      }));
      return { tags: tags, messages: messages };
    }

    const faces = aiData.faces;
    const output = faces.map(createOutput);

    store.dispatch(setOutput(output));
  }

  const aiData = useAiDataSelector();
  const currentOutput = useOutputSelector();
  useEffect(() => {
    if (aiData && !currentOutput) {
      getTexts(aiData);
    }
  });
}

export default useCreateOutput;

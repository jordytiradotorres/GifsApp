import type {FC} from "react";

interface IPreviousSearchesProps {
  searches: string[]
  onTermClicked: (term: string) => void
}

export const PreviousSearches: FC<IPreviousSearchesProps> = ({searches, onTermClicked}) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map(term => (
          <li key={term} onClick={() => onTermClicked(term)}>{term}</li>
        ))}
      </ul>
    </div>
  )
}

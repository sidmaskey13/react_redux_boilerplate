import React, {useEffect, useState} from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { getFacts } from "../../redux/cat-facts/action";
import { Pagination } from 'semantic-ui-react'

function CatFactList() {
    const facts = useSelector(state => state.catFacts.catFacts)
    const [currentPage, setCurrentPage] = useState(1);
    const [showPerPage] = useState(10);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFacts());
    }, []);

    const indexOfLastFact = currentPage * showPerPage;
    const indexOfFirstFact = indexOfLastFact - showPerPage;
    const currentFacts = facts.slice(indexOfFirstFact, indexOfLastFact)

    const handlePaginationChange = (e, { activePage }) => setCurrentPage(activePage);
        return (
            <div>
                <h1>Cat Facts</h1>
                <Pagination
                    defaultActivePage={1}
                    totalPages={Math.ceil(facts.length / showPerPage)}
                    onPageChange={handlePaginationChange}
                    activePage={currentPage}
                />
                <ul className="list-group">
                    {facts ? currentFacts.map(fact => (
                        <li key={fact.id} className="list-group-item">{fact.text}</li>
                    )) : "Not Found"}
                </ul>  
            </div>
        )   
}

export default CatFactList;
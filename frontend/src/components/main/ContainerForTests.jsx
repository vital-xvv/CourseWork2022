import React, {Fragment} from 'react';
import ProgTest from '../ProgrammingTest/ProgTest';
import BiologyTestLink from './BiologyTestLink';
import ProgTestLink from './ProgTestLink';
import "./TestLinkIcon.css";

const ContainerForTests = () => {
    return (
        <Fragment>
            <div className='filler'></div>
            <div className='super-main-container-for-tests'>
                <ProgTestLink/>
                <BiologyTestLink/>
            </div>
        </Fragment>
        
    );
};

export default ContainerForTests;
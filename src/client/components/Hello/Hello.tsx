import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {HELLO_WORLD} from '../../constants';
import {countSelector} from '../../store/selectors';
import {incrementCount} from '../../store/actions-creators';

export interface HelloProps {
    count: number;
    onClick: () => never;
}

const Hello = (props: HelloProps) => {
    const {
        count,
        onClick,
    } = props;

    return (
        <div>
            <h1>{HELLO_WORLD}</h1>
            <span>{count}</span>
            <button onClick={onClick}>Click me!</button>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    count: countSelector,
});
const mapDispatchToProps = {
    onClick: incrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

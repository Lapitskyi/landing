// eslint-disable-next-line no-unused-vars
import React from 'react';

import { connect } from 'react-redux';
import AboutItem from './AboutItem';

const mapStateToProps = ({ aboutPage }) => ({ about: aboutPage.about });

export default connect(mapStateToProps, {})(AboutItem);

// eslint-disable-next-line no-unused-vars
import React from 'react';

import { connect } from 'react-redux';
import AboutItem from './AboutItem';

const mapStateToProps = (aboutPage) => ({ about: aboutPage.about });

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AboutItem);

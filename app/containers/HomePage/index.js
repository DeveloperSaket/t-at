/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';
import { homepage } from '../../Constant/homepage';
import PackkageCard from "../../components/Cards/Card";
import ProfileCard from "../../components/Cards/ProfileCard";
import Img from '../../components/Header/Img';
import Banner from './img/main.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import ActionCard from "../../components/Cards/ActionCard";

const key = 'home';

export function HomePage({
  username,
  // loading,
  // error,
  // repos,
  onSubmitForm,
  // onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
    // todo: pop-up launch after 40 sec [write logic here]
  }, []);

  // const reposListProps = {
  //   loading,
  //   error,
  //   repos,
  // };

  const ContentWrapper = styled.div`
  padding: 0 16px;
`;

  const SectionWrapper = styled.div`
  width: 100%;
  border: solid 2px wheat;
  border-radius: 0.5em;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
`;

  const WrapToTop = styled.div`
  background-color: rgb(128, 181, 242);
  color: antiquewhite;
  font-weight: 700;
  text-align: center;
 `;

  const WrapToCenter = styled.div`
  border: 0;
  font-weight: 700;
  font-size: xxx-large;
  color: rgb(128, 181, 242);
  text-align: center;
`
  const WrapToBottom = styled(SectionWrapper)`
  border: 0;
  height: auto;
  justify-content: space-around;
`
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        {
          // todo: title and meta can be added like this
        }
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <div className='main-div'>
          <WrapToTop>
            <abbr title="Call or WhatsApp US">
              <FontAwesomeIcon icon={faPhone} style={{paddingRight: '2px'}}/> +91 9480-901-681
              <FontAwesomeIcon icon={faWhatsapp} style={{padding: '0 2px 0 14px'}} /> +91 9480-901-681
            </abbr>
          </WrapToTop>
          <WrapToCenter>
            Tour at
          </WrapToCenter>
          <WrapToBottom >
            {homepage.sec1.cards.map(v => <ProfileCard profile={v} />)}
          </WrapToBottom>
        </div>
        {/* <Img src={Banner} alt="react-boilerplate - Logo" /> */}
        <ContentWrapper>
          {/* <div>
            {homepage.sec1.cards.map(v => <div>{v.text}</div>)}
          </div>
          <div style={{ marginTop: '15px' }}>
            {homepage.sec2.cards.map(v => <div>{v.text}</div>)}
          </div>
          <div style={{ marginTop: '15px' }}>
            {homepage.sec3.cards.map(v => <div>{v.text}</div>)}
          </div> */}
          {/* <WrapToBottom >
            {homepage.sec1.cards.map(v => <ProfileCard profile={v} />)}
          </WrapToBottom> */}
          <SectionWrapper >
            {homepage.sec4.cards.map(v => <PackkageCard worker={v} />)}
          </SectionWrapper>
          <div style={{ marginTop: '15px' }}>
            {homepage.sec5.cards.map(v => <div>{v.text}</div>)}
          </div>

          {/* <CenteredSection>
      <div className="main-div">
        {
          // todo: Video in background : image in backgrond for page below
        }
        <div>
          {homepage.sec1.cards.map(v => (
            <div>{v.text}</div>
          ))}
        </div>
        <div style={{ marginTop: '15px' }}>
          {homepage.sec2.cards.map(v => (
            <div>{v.text}</div>
          ))}
        </div>
        <div style={{ marginTop: '15px' }}>
          {homepage.sec3.cards.map(v => (
            <div>{v.text}</div>
          ))}
        </div>
        <div style={{ marginTop: '15px' }}>
          {homepage.sec4.cards.map(v => (
            <div>
              {v.text} - {v.days} - {v.oldCharges} - {v.charges}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '15px' }}>
          {homepage.sec5.cards.map(v => (
            <div>{v.text}</div>
          ))}
        </div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </Form>
          <ReposList {...reposListProps} />
        </Section> */}
        </ContentWrapper>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);

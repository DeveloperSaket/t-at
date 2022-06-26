/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';

// import H1 from 'components/H1';
// import messages from './messages';
// import List from './List';
// import ListItem from './ListItem';
// import ListItemTitle from './ListItemTitle';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <meta
          name="Description"
          content="complete information for Meghalaya tour. Get all travel information related to meghalaya cities,
          tourist attractions , tourist place, travel destinations,rental car , meghalaya food ,meghalaya calture, things to do & travel tips on where to visit, where to stay . Explore complet Meghalaya tours through Tourat.in"
        />
        <meta
          name="Keywords"
          content="Meghalaya tourism, Tourism guide, Travel in Meghalaya, Cab in meghalaya , Tourist attractions in meghalaya ,Explore Meghalaya nature ."
        />
      </Helmet>
      {/* <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.scaffoldingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.scaffoldingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.feedbackHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.feedbackMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.routingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.routingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.networkHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.networkMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.intlHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.intlMessage} />
          </p>
        </ListItem>
      </List> */}
    </div>
  );
}

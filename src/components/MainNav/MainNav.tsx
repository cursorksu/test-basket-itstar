import React, { FC, useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { MainNavItems } from '../../constants/data';

import './MainNav.scss';

export const MainNav: FC = () => {
  const [expanded, setExpanded] = useState<string|boolean>(false);

  const handleChange = (panel: string) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <nav className="nav">
      {MainNavItems.map(({
        id, link, value, dropdown,
      }) => (
        <ExpansionPanel
          expanded={
            expanded === id
          }
          onChange={handleChange(id)}
          key={id}
        >
          <ExpansionPanelSummary
            expandIcon={id !== '112' && <span className="nav__arrow" />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography key={id}>
              <a
                href={link}
                onClick={event => event.preventDefault()}
                className="nav__link"
              >
                {value}
              </a>
            </Typography>
          </ExpansionPanelSummary>
          {dropdown.map(item => (
            <ExpansionPanelDetails key={item.id}>
              <Typography>
                <a
                  href={item.link}
                  onClick={event => event.preventDefault()}
                  className="nav__dropdown"
                >
                  {item.value}
                </a>
              </Typography>
            </ExpansionPanelDetails>
          ))}
        </ExpansionPanel>
      ))}
    </nav>
  );
};

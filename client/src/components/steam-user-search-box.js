import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

export default function (props) {
  const [search, updateSearch] = useState(props.search || '');
  const history = useHistory();

  return (
    <div className={classnames(props.frontpageVersion ? 'shadow' : '', props.className)}>
      <Form onSubmit={() => history.push(`/search/${search}`)}>
        <FormGroup>
          <InputGroup
            className={classnames({
              'input-group-alternative': props.frontpageVersion,
              'is-invalid':
                !props.frontpageVersion && search !== '' && !(search && search.match(/^[0-9]{17}$/))
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fa fa-search" />
              </InputGroupText>
            </InputGroupAddon>

            <Input
              type="text"
              placeholder="Steam 64 ID"
              value={search}
              onChange={(e) => updateSearch(e.target.value)}
            />

            <InputGroupAddon addonType="prepend">
              <Button
                className="rounded-right shadow-none"
                color="primary"
                disabled={!props.frontpageVersion && !(search && search.match(/^[0-9]{17}$/))}
              >
                Search
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <FormFeedback>A valid Steam 64 ID is a 17 digit number.</FormFeedback>
        </FormGroup>
      </Form>
    </div>
  );
}

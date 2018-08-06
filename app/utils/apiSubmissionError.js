import { SubmissionError } from 'redux-form/immutable'
import _ from 'lodash'
import trans from '../trans'

export default (formName) => (response) => {
  if (!(response && response.status === 200)) {
    const errors = {}
    const details = _.get(response, 'data.details')
    if (typeof details === 'object') {
      for (const key of Object.keys(details)) {
        if (key === 'error') {
          errors._error = trans(`validation.joi.submission.${formName}.${key}.${details[key].type}`,
            {value: details[key].value})
        } else {

          let translate
          let errKey = key
          if (key.indexOf('investors.') !== -1) {
            errKey = key.replace(/\d/gi, '[\$&]').replace(/\./, '')
          }
          if (errKey.indexOf('investors[') !== -1) {
            translate = trans(`validation.joi.submission.${formName}.${errKey.replace(/investors\[\d\]/gi,
              'owner')}.${details[key].type}`,
              {value: details[key].value})
          } else
            translate = trans(`validation.joi.submission.${formName}.${errKey}.${details[key].type}`,
              {value: details[key].value})

          _.set(errors, errKey, translate)
        }
      }

    }
    throw new SubmissionError(errors)
  } else {
    return Promise.resolve(response)
  }
}

import React from 'react'
import ArrayContainer from '../ArrayContainer'
import EnumAttribute from '../EnumAttribute'
import ObjectContainer from '../ObjectContainer'
import TextAreaAttribute from '../TextAreaAttribute'
import TextAttribute from '../TextAttribute'

/**
 * @param {{
 *  value: unknown
 *  validationErrors: import('../../../../../shared/validationTypes').ValidationError[]
 *  dataPath: string
 *  onUpdate({}): void
 * }} props
 */
export default function References(props) {
  return (
    <ArrayContainer
      {...props}
      label="List of references"
      description="Holds a list of references."
      defaultItemValue={() => ({})}
    >
      {(itemProps) => (
        <ObjectContainer
          {...itemProps}
          label="Reference"
          description="Holds any reference to conferences, papers, advisories, and other resources that are related and considered related to either a surrounding part of or the entire document and to be of value to the document consumer."
          defaultValue={() => ({ type: 'external' })}
        >
          {(referenceProps) => (
            <>
              <TextAreaAttribute
                {...referenceProps('summary')}
                label="Summary of the reference"
                description="Indicates what this reference refers to."
              />
              <EnumAttribute
                {...referenceProps('type')}
                label="Type of reference"
                description="Indicates whether the reference points to the same document or vulnerability in focus (depending on scope) or to an external resource."
                options={['external', 'self']}
                deletable
              />
              <TextAttribute
                {...referenceProps('url')}
                label="URL of reference"
                description="Provides the URL for the reference."
                type="url"
              />
            </>
          )}
        </ObjectContainer>
      )}
    </ArrayContainer>
  )
}
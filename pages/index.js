import React from 'react'

const Index = () => (
  <>
    <p>
      <b>Openskill</b> is a bayesian rating system designed for games with more
      than two players. A player&apos;s skill is represented as a normal
      gaussian distribution, characterized by a mean (&mu;) and a variance
      (&sigma;&sup2;).
    </p>
    <p>
      Ordinal rankings are given by &mu;-3&sigma;, such that we can be 99.7%
      confident the player&apos;s ranking is at least this, which follows from
      the
      <a href="https://en.wikipedia.org/wiki/68%E2%80%9395%E2%80%9399.7_rule">
        68-95-99.7 rule
      </a>
      .
    </p>
    <p>
      All these games are yours except europa.
      <br />
      Attempt no landing there.
      <br />
      Play them together.
      <br />
      Play them in peace.
    </p>
  </>
)

export default Index

import React from 'react'

export default function Home() {
  return (
    <div>
      <ns-landmark type="hillside" gradient="invert-ramp-cyan" nf-clear="">
        <h1 slot="heading">
          <span className="h1 enlighten"><b>Moving home</b> with British Gas.</span>
        </h1>
        <p slot="paragraph">We can set up your new home and keep everything as it is with just a few steps. We’ll close
          your account, send you a final statement or bill and help you to get set up at your new home.</p>
      </ns-landmark>
      <ns-panel>
        <ns-lockup type="lockjaw" decoration="home" reverse="">
          <h2 slot="heading">
            <span className="h5">Are you ready to get started?</span>
            <span className="h1 enlighten">We'll need some information</span>
          </h2>
          <div slot="paragraph">
            <br />
            <ul className="ul-bullet">
              <li>The date you’re moving home. This should be within the next 28 days.</li>
              <li>Your new address and what products you want to transfer</li>
              <li>If you’ve already moved, a meter reading will allow us to provide you with a more accurate final
                statement or bill</li>
            </ul>
          </div>
          <a slot="cta" href="intro">
            <ns-cta type="direct" loading="false">Start your move</ns-cta>
          </a>
          <ns-image slot="image" ratio="4x3" src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiY2VudHJpY2FcL2FjY291bnRzXC8wZlwvNDAwMDE1N1wvcHJvamVjdHNcLzlcL2Fzc2V0c1wvNWVcLzE5NDAzXC9lN2M1YjQzNDIyYWNjYjUxYjEyOWQxODU4YmJkYjMyZi0xNTY3MDgxNjM2LmpwZyJ9:centrica:W5NaTtvvJFb_LQOnYbUkoimEBxAa4hCNNPiJP-usygo?width=400">
          </ns-image>
        </ns-lockup>
      </ns-panel>
    </div>
  )
}

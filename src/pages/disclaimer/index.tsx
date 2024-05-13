import classes from "./index.module.scss";
const Disclaimer = () => {
  return (
    <div className={classes.terms_main}>
      <p>
        <h2>
          Welcome to <b>GetAndGain.com</b>! Please read the following disclaimer
          carefully before using our website:
        </h2>
        <p>
          <b>1. Affiliate Relationships:</b>GetAndGain.com participates in
          various affiliate marketing programs, which means we may earn
          commissions from qualifying purchases made through links on our
          website. These commissions help support the operation of our website
          and allow us to continue providing valuable content and services to
          our users.
        </p>
        <p>
          <b>2. Product Information:</b> While we strive to provide accurate and
          up-to-date product information, we cannot guarantee the accuracy,
          completeness, or reliability of any product details or descriptions on
          GetAndGain.com. Prices, availability, and other product-related
          information may change without notice, and we do not warrant that such
          information is always accurate or current.
        </p>
        <p>
          <b>3. Third-Party Websites:</b>GetAndGain.com may contain links to
          third-party websites or resources. These links are provided for your
          convenience and do not signify our endorsement of the content,
          products, or services offered by these third parties. We are not
          responsible for the content or privacy practices of these websites and
          encourage you to review their terms and privacy policies before
          interacting with them.
        </p>
        <p>
          <b>4. No Warranty:</b> GetAndGain.com is provided on an "as is" and
          "as available" basis without any warranties of any kind, either
          express or implied. We do not warrant that our website will be
          error-free, uninterrupted, or free from viruses or other harmful
          components. Your use of GetAndGain.com is at your own risk.
        </p>
        <p>
          <b> 5. Limitation of Liability:</b> In no event shall GetAndGain.com
          or its affiliates be liable for any direct, indirect, incidental,
          special, or consequential damages arising out of or in any way
          connected with your use of our website or the products and services
          offered through affiliate links. This includes, but is not limited to,
          damages for loss of profits, data, or goodwill.
        </p>

        <p>
          <b>6. Governing Law:</b> These disclaimers shall be governed by and
          construed in accordance with the laws of [Your Jurisdiction], without
          regard to its conflicts of law provisions.
        </p>
        <p>
          <b>7. Changes to Disclaimer:</b> We reserve the right to modify or
          revise this disclaimer at any time without prior notice. By continuing
          to use GetAndGain.com after any changes to this disclaimer, you agree
          to be bound by the revised terms.
        </p>
      </p>
    </div>
  );
};

export default Disclaimer;

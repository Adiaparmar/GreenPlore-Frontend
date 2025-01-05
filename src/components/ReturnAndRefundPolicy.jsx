import React from "react";
// import "./R&R_Policy.css";
import "./ReturnAndRefundPolicy.css";


const ReturnAndRefundPolicy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-header">GreenPlore Returns & Exchange Policy</h1>
      <p>
        We value customer satisfaction and are committed to ensuring that your
        shopping experience with GreenPlore.com is seamless. We offer returns
        and exchanges for items purchased directly from verified brands and
        designers on GreenPlore.com, subject to the following conditions.
      </p>

      <h2>Eligible Returns:</h2>
      <p>We are happy to accept returns for the following situations:</p>
      <ul>
        <li>
          <strong>Faulty or defective products:</strong> If you receive a
          product that is damaged, defective, or has a manufacturing fault, we
          will be happy to accept the return and provide you with a replacement
          or refund.
        </li>
        <li>
          <strong>Incorrect items received:</strong> If the item you received is
          not what you ordered, please reach out to us for a resolution.
        </li>
        <li>
          <strong>Size issues:</strong> If you ordered the wrong size or would
          like to exchange an item for a different size (subject to
          availability), we are happy to help.
        </li>
      </ul>

      <h2>Non-Returnable Products:</h2>
      <p>
        For hygiene and safety reasons, we do not accept returns on the
        following items:
      </p>
      <ul>
        <li>
          <strong>Worn, washed, or soiled items:</strong> Items that have been
          used, washed, or damaged cannot be returned. Please ensure that the
          items are in brand-new condition when returning.
        </li>
        <li>
          <strong>Beauty products:</strong> Due to health and safety
          regulations, beauty products cannot be returned once opened or used.
        </li>
        <li>
          <strong>Foods & beverages:</strong> We cannot accept returns on
          perishable goods such as food and beverages.
        </li>
        <li>
          <strong>Large items:</strong> Furniture, statues, or other large items
          cannot be returned due to logistical constraints.
        </li>
        <li>
          <strong>Custom-made or handmade items:</strong> Personalized or
          custom-made products are final sale and cannot be returned unless
          faulty.
        </li>
      </ul>

      <h2>Return & Exchange Conditions:</h2>
      <p>
        To ensure a smooth return or exchange process, please keep the following
        conditions in mind:
      </p>
      <ul>
        <li>
          Returns must be initiated within 14 days of receiving your order.
          After this period, we unfortunately will not be able to process the
          return.
        </li>
        <li>
          Items must be unused, unwashed, and in their original packaging,
          unless the product was damaged during delivery. Please keep the tags
          intact and the packaging in good condition to ensure that we can
          accept the return.
        </li>
        <li>
          Logistics charges for delivery are non-refundable. The cost of
          shipping the item back to us will be the customer’s responsibility
          unless the return is due to an error on our part.
        </li>
      </ul>

      <h2>Product Return or Exchange Information:</h2>
      <p>
        To help you make informed purchasing decisions, you will be able to see
        whether a product is eligible for return before you complete your
        purchase. This information is displayed clearly on the product page, so
        you can easily check if the item you're interested in can be returned or
        exchanged.
      </p>

      <h2>How to Return or Exchange:</h2>
      <p>
        If you are eligible for a return or exchange, please follow the steps
        outlined below:
      </p>
      <ol>
        <li>
          Email us at <strong>infogreenplore@gmail.com</strong> within 3 days of
          receiving your order. Please include clear photos of the product,
          especially if it’s damaged, to assist us in processing your request.
        </li>
        <li>
          Ship the item back within 7 days of receiving approval. Return
          shipping costs are the customer’s responsibility unless the return is
          due to a fault on our side (such as damaged or incorrect items).
        </li>
        <li>
          Refunds will be processed within 7 days after we receive the returned
          product in its original condition. Please note that once processed,
          the refund will be credited to the original payment method.
        </li>
      </ol>
    </div>
  );
};

export default ReturnAndRefundPolicy;

{{>header}}
      <table width="100%" cellpadding="0" cellspacing="0" style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; background-color: {{>table-header-color}}; margin: 0 0 20px 0; border: {{>border-style}};" bgcolor="{{>table-header-color}}">
          <tr style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; margin: 0;">
              <td style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; margin: 0;">
                      <tr style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; margin: 0;">
                          <td style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; vertical-align: top; margin: 0; padding: 0px;" valign="top">
                              <h2 style="font-family: {{>font}}; box-sizing: border-box; margin: 0;font-size: 16px;">
                                  {{translate "Hello"}} {{account.contact.first}} {{account.contact.last}},
                              </h2>
                              <h4 style="margin: 5px 0;">
                                  {{translate "Thank you for your purchase. Below is your product delivery information"}}.
                              </h4>
                              
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
      <table width="100%" cellpadding="0" cellspacing="0" style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; background-color: #fff; margin: 0 0 20px 0; border: {{>border-style}};" bgcolor="#fff">
          <tr style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; margin: 0;">
              <td style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; vertical-align: top; margin: 0; padding: 10px 0px 10px 20px; border-bottom:{{>border-style}};" bgcolor="#DCDCDC">
                  <strong>{{translate "Your Order"}}</strong>
              </td>
          </tr>
          {{#each order.items}}
              <tr style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; margin: 0;">
                  <td style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; vertical-align: top; margin: 0; padding: 20px;border-bottom:{{>border-style}};" valign="top">
                      <table width="100%" cellpadding="0" cellspacing="0" style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; margin: 0;">
                          <tr style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; margin: 0;">
                              <td style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; vertical-align: top; margin: 0; padding: 0px;" valign="top">
                                  <h3 style="margin: 0px; font-size: 14px;">
                                      {{display}} 
                                      {{#if childItems}}
                                          <span class="label" style="display: inline; padding: 3px 7px; font-size: 9px; color: #fff; text-align: center; white-space: nowrap; vertical-align: top; border-radius: 3px; background-color: green;">
                                              {{translate "Bundle"}}
                                          </span>
                                      {{/if}}
                                  </h3> 
                                  {{#if subscription}}
                                      <div class="price" style="margin:10px 0px;">
                                          <span style="border: {{>border-style}}; background:{{>table-header-color}}; padding:5px;">
                                          {{#if subscription.adhoc}}
                                              {{translate "Subscription will be renewed by vendor"}}
                                          {{else}}
                                              {{#if subscription.autoRenew}}
                                                  {{translate "Subscription renews every"}} {{subscription.intervalLength}} {{translate subscription.intervalUnit}}.
                                                  {{translate "Next charge"}}: {{subscription.nextChargeDateDisplay}} ({{subscription.nextChargeTotalDisplay}}).                                          
                                              {{else}}
                                                  {{translate "Must be renewed every"}} {{subscription.intervalLength}} {{translate subscription.intervalUnit}}.
                                                  {{subscription.nextChargeTotalDisplay}} {{translate "must be paid manually before"}} {{subscription.nextChargeDateDisplay}}.
                                              {{/if}}
                                          {{/if}}
                                          </span>
                                      </div>
                                      


                                  {{/if}}
                                  <div style="margin:10px 0px;">
                                      {{#each fulfillments}} 
                                          {{#each this}} 
                                              {{#if file}}
                                                  <a href="{{file}}" target="_blank" style="color:#FFFFFF; text-decoration:none; margin:10px 0px; display:block;">
                                                      <table border="0" cellpadding="0" cellspacing="0" style="background-color:#3C9F00; border:1px solid #3C9F00; border-radius:5px;">
                                                          <tr>
                                                              <td align="center" valign="middle" style="color:#FFFFFF; font-family:{{>font}}; font-size:12px; font-weight:bold; padding:5px 10px;">
                                                                  <span style="color:#FFFFFF;">{{translate "Download"}} {{display}}</span>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </a>
                                              {{/if}} 
                                          {{/each}} 
                                      {{/each}}
                                  </div>
                                  <div style="margin:20px 0px;">
                                      {{#each fulfillments}} 
                                          {{#each this}} 
                                              {{#if license}}
                                                  <div style="background-color: #FFFFFF; padding: 5px; border-radius: 5px; color: #3C9F00; border: 1px solid #3C9F00; margin:10px 0px; white-space: pre-line;">
                                                      {{display}}: {{license}}
                                                  </div> 
                                              {{/if}} 
                                          {{/each}} 
                                      {{/each}}
                                  </div>
                                  {{#if fulfillments.instructions}}
                                      <div style="margin:20px 0px;">
                                          {{{fulfillments.instructions}}}
                                      </div>
                                  {{/if}}
                              </td>
                              <td style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; vertical-align: top; margin: 0; padding: 0px; text-align:right;" valign="top" align="right">
                                  <div>
                                      {{#if unitDiscountValue}}
                                          <del style="font-size: 11px;">
                                              {{priceTotalDisplay}}
                                          </del>
                                      {{/if}}
                                  </div>
                                  <div>
                                      <strong class="price" style="font-size: 14px;color: #FF8900;"> {{subtotalDisplay}}</strong>
                                      <span class="label" style="display: inline; padding: 3px 7px; font-size: 9px; color: #fff; text-align: center; white-space: nowrap; vertical-align: top; border-radius: 3px; background-color: #777;">
                                          x {{quantity}}
                                      </span>
                                  </div>
                                  {{#if unitDiscountValue}}
                                      <div class="saved" style="font-size: 11px;color: #3c763d;">
                                          You saved {{discountTotalDisplay}} ({{discountPercent}})
                                      </div>
                                  {{/if}}
                              </td>
                          </tr>
                          {{#if childItems}}
                              <tr>
                                  <td colspan="2">
                                      <div style="border: {{>border-style}}; padding:10px;">
                                          {{#each childItems}}
                                              <h3 style="margin: 0px; font-size: 14px;">{{display}}</h3>
                                              <div style="margin: 10px 0px;">
                                                  {{#each fulfillments}} 
                                                      {{#each this}} 
                                                          {{#if file}}
                                                          <a href="{{file}}" target="_blank" style="color:#FFFFFF; text-decoration:none; margin:10px 0px; display:block;">
                                                              <table border="0" cellpadding="0" cellspacing="0" style="background-color:#353535; border:1px solid #353535; border-radius:5px;">
                                                                  <tr>
                                                                      <td align="center" valign="middle" style="color:#FFFFFF; font-family:{{>font}}; font-size:12px; font-weight:bold; padding:5px 10px;">
                                                                          <span style="color:#FFFFFF;">{{translate "Download"}} {{display}}</span>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </a>
                                                          {{/if}}
                                                      {{/each}}
                                                  {{/each}}
                                              </div>
                                              <div style="margin:20px 0px;">
                                                  {{#each fulfillments}} 
                                                      {{#each this}} 
                                                          {{#if license}}
                                                              <div style="background-color: #f9f2f4; padding: 5px; border-radius: 5px; color: #c7254e; border: 1px solid #c7254e; margin:10px 0px;">
                                                                  {{display}}: {{license}}
                                                              </div>
                                                          {{/if}}
                                                      {{/each}}
                                                  {{/each}}
                                              </div>
                                              {{#if fulfillments.instructions}}
                                                  <div style="margin:20px 0px;">
                                                      {{{fulfillments.instructions}}}
                                                  </div>
                                              {{/if}}
                                          {{/each}}
                                      </div>
                                  </td>
                              </tr>
                          {{/if}}
                      </table>
                  </td>
              </tr>
          {{/each}}
        
          <tr style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; margin: 0;">
              <td style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; vertical-align: top; margin: 0; padding: 20px; border-top:{{>border-style}};" bgcolor="#EEEEEE">
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; margin: 0;">
                      <tr style="font-family: {{>font}}; box-sizing: border-box; font-size: 12px; margin: 0;">
                          <td style="font-family: {{>font}}; box-sizing: border-box; font-size: 11px; vertical-align: top; margin: 0; padding: 0px;" valign="top">
                             {{#if order.subtotal}}
                                 <div>
                                    {{translate "Charges will appear on your bill as"}} {{order.billDescriptor}}
                                  </div>
                             {{/if}}
							<br><br>
                            	
                              <div>
                                  <a href="{{order.invoiceUrl}}" style="text-decoration: none; color: #337ab7;">{{translate "View Invoice"}}</a>
                              </div>
                              {{#if order.contact.address.address1}}
                                  <div style="margin: 20px 0 0;">
                                      <strong>{{translate "Shipping Address"}}:</strong>
                                  </div>
                                  <div style="margin: 0 0 0 10px;">
                                      <div>
                                          {{order.contact.fullName}}
                                      </div>
                                      <div>
                                          {{order.contact.address.address1}}
                                      </div>
                                      {{#if order.contact.address.address2}}
                                          <div>
                                              {{order.contact.address.address2}}
                                          </div>
                                      {{/if}}
                                      <div>
                                          {{order.contact.address.addressCity}}, {{order.contact.address.addressRegionDisplay}} {{order.contact.address.addressPostalCode}}
                                      </div>
                                      <div>
                                          {{order.contact.address.addressCountryDisplay}}
                                      </div>
                                  </div>
                              {{/if}}
                          </td>
                          <td style="font-family: {{>font}}; box-sizing: border-box; text-align:right; font-size: 11px; vertical-align: top; margin: 0; padding: 0px;" valign="top" align="right">
                              {{#if order.taxDisplay}}
                                  <div>
                                      <strong>{{translate "Tax"}}: {{order.taxDisplay}}</strong>
                                  </div>
                              {{/if}} 
                              {{#if order.discountWithTax}}
                                  <div class="saved" style="color: #3c763d;">
                                      <strong>{{translate "You saved"}}: {{order.discountDisplay}}</strong>
                                  </div>
                              {{/if}}
                              {{#if order.coupons}}
                                  <div>
                                      {{translate "Coupon Code"}}: 
                                      {{#each order.coupons}} 
                                          {{this}}
                                      {{/each}}
                                  </div>
                              {{/if}}
                              <h3 style="margin: 5px 0;font-size: 14px;color: #FF8900;" class="price">
                                  {{translate "Total"}}: {{order.totalDisplay}}
                              </h3> 
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
{{>footer}}

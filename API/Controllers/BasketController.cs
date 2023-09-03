using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly ILogger<BasketController> _logger;
        private readonly StoreContext _context;

        public BasketController(ILogger<BasketController> logger, StoreContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            Basket basket = await RetrieveBasket();
            if (basket == null) return NotFound();

            return basket;
        }



        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetrieveBasket() ?? CreateBasket();
            var product = await _context.Products.FindAsync(productId);
            if (product == null) return NotFound();
            basket.AddItem(product, quantity);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return StatusCode(201);
            return BadRequest(new ProblemDetails { Title = "Problem adding item to basket" });
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            //get basket
            //remove item from basket
            //save changes
            return Ok();
        }

        private async Task<Basket> RetrieveBasket()
        {
            return await _context.Baskets
                        .Include(i => i.Items)
                        .ThenInclude(p => p.Product)
                        .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
        }

        private Basket CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.Now.AddDays(30) };
            Response.Cookies.Append("buyerId", buyerId, cookieOptions);
            var basket = new Basket { BuyerId = buyerId };
            _context.Baskets.Add(basket);
            return basket;
        }


    }
}
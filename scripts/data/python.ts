import { Repo } from "."

export const pythonRepo: Repo = {
	label: "Python",
	url: "https://github.com/Python",
	files:
	[
		{
			path: "https://github.com/Pycord-Development/pycord/blob/master/examples/app_commands/slash_cog.py",
			code: `
import discord
from discord.ext import commands


class Example(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.slash_command(
        guild_ids=[...]
    )  # Create a slash command for the supplied guilds.
    async def hello(self, ctx: discord.ApplicationContext):
        await ctx.respond("Hi, this is a slash command from a cog!")

    @commands.slash_command()  # Not passing in guild_ids creates a global slash command.
    async def hi(self, ctx: discord.ApplicationContext):
        await ctx.respond("Hi, this is a global slash command from a cog!")


def setup(bot):
    bot.add_cog(Example(bot))

			`
		},
		{
			path: "https://github.com/Pycord-Development/pycord/blob/master/examples/app_commands/info.py",
			code: `
				import discord

intents = discord.Intents.default()
intents.members = True

bot = discord.Bot(
    debug_guilds=[...],
    description="An example to showcase how to extract info about users.",
    intents=intents,
)


@bot.slash_command(name="userinfo", description="Gets info about a user.")
async def info(ctx: discord.ApplicationContext, user: discord.Member = None):
    user = (
        user or ctx.author
    )  # If no user is provided it'll use the author of the message
    embed = discord.Embed(
        fields=[
            discord.EmbedField(name="ID", value=str(user.id), inline=False),  # User ID
            discord.EmbedField(
                name="Created",
                value=discord.utils.format_dt(user.created_at, "F"),
                inline=False,
            ),  # When the user's account was created
        ],
    )
    embed.set_author(name=user.name)
    embed.set_thumbnail(url=user.display_avatar.url)

    if user.colour.value:  # If user has a role with a color
        embed.colour = user.colour

    if isinstance(user, discord.User):  # Checks if the user in the server
        embed.set_footer(text="This user is not in this server.")
    else:  # We end up here if the user is a discord.Member object
        embed.add_field(
            name="Joined",
            value=discord.utils.format_dt(user.joined_at, "F"),
            inline=False,
        )  # When the user joined the server

    await ctx.respond(embeds=[embed])  # Sends the embed


bot.run("TOKEN")
			`
		}
	]
}
